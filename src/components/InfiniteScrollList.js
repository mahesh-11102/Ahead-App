import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/InfiniteScrollList.module.css';

const InfiniteScrollList = () => {
    const [items, setItems] = useState([]);
    const [displayItems, setDisplayItems] = useState([]);
    const [page, setPage] = useState(0);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const itemListRef = useRef(null);
    const loader = useRef(null);

    useEffect(() => {
        // Fetch all data once and set items
        fetch('https://mocki.io/v1/8ed4d7b7-addf-454c-ac5c-7d873a083920')
            .then(response => response.json())
            .then(data => {
                setItems(data);
                setDisplayItems(data.slice(0, 5)); // Initially display first 5 items
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const firstEntry = entries[0];
            if (firstEntry.isIntersecting) {
                setPage(page => page + 1);
            }
        }, { threshold: 1.0 });

        if (loader.current) {
            observer.observe(loader.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const nextPageItems = items.slice(page * 5, (page + 1) * 5);
        setDisplayItems(prevItems => [...prevItems, ...nextPageItems]);
    }, [page, items]);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop } = itemListRef.current;
            const currentIndex = Math.floor(scrollTop / 100); // Assuming each item is 100px high
            setHighlightedIndex(currentIndex);
        };

        const itemListElement = itemListRef.current;
        itemListElement.addEventListener('scroll', handleScroll);

        return () => itemListElement.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.scrollContainer}>
            <div ref={itemListRef} className={styles.itemList}>
                {displayItems.map((item, index) => (
                    <div key={index} className={`${styles.item} ${highlightedIndex === index ? styles.highlighted : ''}`}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            <div ref={loader} className={styles.loader} />
            <div className={styles.blurTop} />
            <div className={styles.blurBottom} />
        </div>
    );
};

export default InfiniteScrollList;
