// src/components/CardSection.js
import Card from './Card';

export default function CardSection() {
    // Array of card objects
    const cards = [
        {
            emoji: '🤦‍♂️',
            title: 'A squabble with your partner',
            description: 'You accuse them of doing that thing you hate (you know they always do it!), instead of staying calm and addressing their concerns.'
        },
        {
            emoji: '😠',
            title: 'You argue with a colleague',
            description: 'You get angry and defensive, instead of staying open and working towards common ground.'
        },
        {
            emoji: '😳',
            title: 'You get a promotion at work',
            description: 'You question yourself and wonder when they’ll realize you’re an unqualified imposter, instead of trusting yourself & your abilities.'
        },
        {
            emoji: '😔',
            title: 'You attend a class reunion',
            description: 'You compare yourself with others, instead of measuring your self-judgment more independently from others.'
        },
    ];

    return (
        <div className="flex flex-wrap justify-center items-center">
            {cards.map((card, index) => (
                <Card key={index} emoji={card.emoji} title={card.title} description={card.description} />
            ))}
        </div>
    );
}
