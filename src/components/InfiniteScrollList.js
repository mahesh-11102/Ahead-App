import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/InfiniteScrollList.module.css';

const InfiniteScrollList = () => {
    const [items, setItems] = useState([]);
    const [highlightedIndex, setHighlightedIndex] = useState(null);
    const itemRefs = useRef(new Array());

    useEffect(() => {
        // Fetch all data once and set items
        fetch('https://mocki.io/v1/8ed4d7b7-addf-454c-ac5c-7d873a083920')
            .then(response => response.json())
            .then(data => {
                setItems(data);
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = itemRefs.current.indexOf(entry.target);
                    if (entry.isIntersecting) {
                        setHighlightedIndex(index);
                    }
                });
            },
            {
                root: null,
                threshold: 0.75, // Adjust this value based on how much of the item has to be in view to be highlighted
            }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            itemRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, [items]);

    return (
        <div className={styles.scrollContainer}>
            <div className={styles.itemList}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => (itemRefs.current[index] = el)}
                        className={`${styles.item} ${highlightedIndex === index ? styles.highlighted : ''}`}
                    >
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteScrollList;
