// src/components/Card.js
export default function Card({ emoji, title, description }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
            <div className="text-center">
                <div className="text-3xl">{emoji}</div>
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
}
