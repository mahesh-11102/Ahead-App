import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/InfiniteScrollList.module.css';

const InfiniteScrollList = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const loader = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: '20px',
            threshold: 1.0,
        });

        if (loader.current) {
            observer.observe(loader.current);
        }

        return () => {
            if (loader.current) {
                observer.disconnect();
            }
        };
    }, []);

    useEffect(() => {
        // Fetch data when the component mounts and when the page changes
        if (hasMore) {
            fetch(`https://mocki.io/v1/8ed4d7b7-addf-454c-ac5c-7d873a083920?page=${page}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length === 0) {
                        setHasMore(false);
                    } else {
                        setItems(prevItems => [...prevItems, ...data]);
                    }
                })
                .catch(error => console.error(error));
        }
    }, [page, hasMore]);

    const handleObserver = entities => {
        const target = entities[0];
        if (target.isIntersecting) {
            setPage(prevPage => prevPage + 1);
        }
    };

    return (
        <div>
            <div className={styles.itemList}>
                {items.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            {hasMore && <div ref={loader} className={styles.loader} />}
        </div>
    );
};

export default InfiniteScrollList;
