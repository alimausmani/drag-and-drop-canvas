// src/components/Canvas.js
import React, { useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const Canvas = () => {
    const [cards, setCards] = useState([]);

    const addCard = () => {
        const newCard = {
            id: cards.length + 1,
            text: "This is some dummy text that will be shown partially...",
            position: { x: 100, y: 100 },
        };
        setCards([...cards, newCard]);
    };

    const handleStop = (e, data, id) => {
        const updatedCards = cards.map((card) =>
            card.id === id ? { ...card, position: { x: data.x, y: data.y } } : card
        );
        setCards(updatedCards);
    };

    return (
        <div
            className="canvas"
            style={{
                width: "100%",
                height: "100vh",
                overflow: "auto",
                border: "1px solid #ccc",
                position: "relative",
            }}
        >
            <button
                onClick={addCard}
                style={{
                    margin: "10px",
                    height: "50px",
                    width: "10%",
                    backgroundColor: "#3333ff",
                    fontSize: "27px",
                    color: "white",
                    borderRadius: "10px",
                    border: "#ffffff",
                    boxShadow: "6px 7px 6px rgba(1, 2, 2, 0.2)",
                }}
            >
                Add Card
            </button>
            {cards.map((card) => (
                <Draggable
                    key={card.id}
                    onStop={(e, data) => handleStop(e, data, card.id)}
                    defaultPosition={card.position}
                >
                    <ResizableBox
                        width={200}
                        height={100}
                        minConstraints={[100, 100]}
                        maxConstraints={[400, 300]}
                        style={{
                            border: "1px solid #000",
                            padding: "10px",
                            boxShadow: "6px 7px 6px rgba(1, 2, 2, 0.2)",
                            fontSize: "17px",
                        }}
                    >
                        <div>
                            {card.text.substring(0, 30)}...
                            <button
                                style={{
                                    display: "block",
                                    marginTop: "10px",
                                    backgroundColor: "#3333ff",
                                    color: "white",
                                    fontSize: "20px",
                                    borderRadius: "9px",
                                    border: "#ffffff",
                                    boxShadow: "6px 7px 6px rgba(1, 2, 2, 0.2)",
                                }}
                                onClick={() => alert(card.text)}
                            >
                                Show More
                            </button>
                        </div>
                    </ResizableBox>
                </Draggable>
            ))}
        </div>
    );
};

export default Canvas;
