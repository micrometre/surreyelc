import React, { useState } from "react";
import { motion } from "framer-motion";

const Wrapper = (props) => {
    return <span className="word-wrapper">{props.children}</span>;
};
const tagMap = {
    paragraph: "p",
    heading1: "h1",
    heading2: "h2"
};
export function AnimatedCharacters(props) {
    const item = {
        hidden: {
            y: "200%",
            color: "#0055FF",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        },
        visible: {
            y: 0,
            color: "#fff",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
        }
    };

    const splitWords = props.text.split(" ");

    const words = [];

    for (const [, item] of splitWords.entries()) {
        words.push(item.split(""));
    }

    words.map((word) => {
        return word.push("\u00A0");
    });

    const Tag = tagMap[props.type];

    return (
      <>
        <Tag>
            {words.map((word, index) => {
                return (
                    <Wrapper key={index}>
                        {words[index].flat().map((element, index) => {
                            return (
                                <span
                                className="logoSpan"
                                    style={{
                                        overflow: "hidden",
          marginTop: "0.12rem",
                                        display: "inline-block"
                                    }}
                                    key={index}
                                >
                                    <motion.span
                                        Vstyle={{
                                            color: "white",
                                            display: "inline-block"

                                        }}
                                        variants={item}
                                    >
                                        {element}
                                    </motion.span>
                                </span>
                            );
                        })}
                    </Wrapper>
                );
            })}
            {/* {} */}
        </Tag>
            <style jsx>{`
        .logoSpan {
          margin-top: 1rem;
          font-size: 2.1rem;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

        }
        @media (max-width: 600px) {
          div {
          }
        }
      `}</style>
      <style global jsx>{`
        body {
        }
      `}</style>
      </>
    );
}

export function App() {
    const [replay, setReplay] = useState(true);
    const placeholderText = [
        { type: "heading1", text: "Electrical specialists" },
        { type: "paragraph", text: "Serving surrey and surrounding areas." },
    ];

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025
            }
        }
    };
    const handleReplay = () => {
        setReplay(!replay);
        setTimeout(() => {
            setReplay(true);
        }, 600);
    };

    return (
        <div>
            <motion.div
                className="appContainer"
                initial="hidden"
                animate={replay ? "visible" : "hidden"}
                variants={container}
            >
                <div className="LogotextContainer"
                >
                    {placeholderText.map((item, index) => {
                        return <AnimatedCharacters {...item} key={index}
                        />;
                    })}
                </div>
                <button onClick={handleReplay}>
                    Replay <span>⟲</span>
                </button>
            </motion.div>
            <style jsx>{`
        .LogotextContainer {
          background-image:
            url(./images/logo.webp);
          background-repeat: no-repeat;
          background-size: auto;
          background-position: center;
          width: 100%;
          min-height: 65vh;
          margin-top: 10rem;
        }
        @media (max-width: 600px) {
          div {
          }
        }
      `}</style>
      <style global jsx>{`
        body {
        }
      `}</style>
        </div>
    );
}







export function LogoText() {
    return (
        <>
            <div>
                <App />
            </div>

        </>
    )

}


export default LogoText;
