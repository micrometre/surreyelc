import { useSpring, useTransition, animated } from "react-spring";
import { useState } from "react";





export function LoopTrue() {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
  })

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        backgroundColor: '#46e891',
        borderRadius: 16,
        ...styles,
      }}
    />
  )
}

export default LoopTrue;
