import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/InfiniteScrollList.module.css'; // Ensure this path matches your CSS module

const InfiniteScrollList = () => {
    const [items, setItems] = useState([]);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const itemListRef = useRef(null);

    useEffect(() => {
        // Fetch data and set items
        fetch('https://mocki.io/v1/8ed4d7b7-addf-454c-ac5c-7d873a083920')
            .then(response => response.json())
            .then(data => {
                setItems(data); // Assuming you want to display all items
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = itemListRef.current;
        const totalHeight = clientHeight + scrollTop;
        const eachItemHeight = 100; // Adjust if your item heights are different

        // Determine which item index should be highlighted
        let currentHighlight = Math.floor(scrollTop / eachItemHeight);

        // Check if the bottom of the scroll is reached and adjust highlighted index
        if (totalHeight >= scrollHeight) {
            currentHighlight = items.length - 1;
        }

        setHighlightedIndex(currentHighlight);
    };

    // Attach the scroll event listener when the component mounts
    useEffect(() => {
        const itemListElement = itemListRef.current;
        itemListElement.addEventListener('scroll', handleScroll);

        // Remove event listener on component unmount
        return () => itemListElement.removeEventListener('scroll', handleScroll);
    }, [items.length]); // Adding items.length to ensure the effect runs when items update

    return (
        <div className={styles.scrollContainer}>
            <div ref={itemListRef} className={styles.itemList}>
                {items.map((item, index) => (
                    <div key={index}
                        className={`${styles.item} ${highlightedIndex === index ? styles.highlighted : ''}`}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            {/* Loader and blurs removed for simplicity. Re-add if necessary */}
        </div>
    );
};

export default InfiniteScrollList;
