import React, { useState,useDrag, animated, to as interpolate } from 'react';
import { useSprings} from 'react'
import styles from './cardCss.css'

const cards = [
    // <img src={require('../img/page1.png')}/>,
    // <img src={require('../img/page2.png')}/>,
    // <img src={require('../img/page3.png')}/>,
    // <img src={require('../img/page4.png')}/>,
    // <img src={require('../img/e.jpg')}/>,
    'https://assets-global.website-files.com/5fe9a4ce19c71c7e0797d652/60c6d455a03d1562b3727c68_MENU%20VINS%20P1-01-min.jpg',
    'https://assets-global.website-files.com/5fe9a4ce19c71c7e0797d652/60c6d456cfb800c8634d659f_MENU%20VINS%20P2-01-min.jpg',
    'https://assets-global.website-files.com/5fe9a4ce19c71c7e0797d652/60c6e2a4c3ee5b35866ff60c_MENU%20RESTAURANT%20P2-01-min.jpg',
    'https://assets-global.website-files.com/5fe9a4ce19c71c7e0797d652/60c6d59d805fac8383e2c155_MENU%20RESTAURANT%20P1-01-min.jpg',
    'https://frmenu.org/wp-content/uploads/2023/11/Dejeuner-Midi-Carte-724x1024.jpg'
]

const to = (i) => ({ 
    x: 0, 
    y: i * -4, 
    scale:1, 
    rot:-10+ Math.random() *20,
    delay: i * 100,
})

const from =(_i) => (i) => ({x: 0, rot:0, scale:1.5,y:-1000})

const trans = (r,s) => 
    `perspective(1500px) rotateX(30deg) rotateY(${r/10}deg) rotateZ(${r}deg) scale(${s})`

    function Deck() {
        const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
        const [props, api] = useSprings(cards.length, i => ({
          ...to(i),
          from: from(i),
        })) // Create a bunch of springs using the helpers above
        // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
        const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
          const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
          const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
          if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
          api.start(i => {
            if (index !== i) return // We're only interested in changing spring-data for the current spring
            const isGone = gone.has(index)
            const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
            const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
            const scale = down ? 1.1 : 1 // Active cards lift up a bit
            return {
              x,
              rot,
              scale,
              delay: undefined,
              config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
            }
          })
          if (!down && gone.size === cards.length)
            setTimeout(() => {
              gone.clear()
              api.start(i => to(i))
            }, 600)
        })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          />
        </animated.div>
      ))}
    </>
  )
}

export default function Card(){
    return(
        <div className={styles.container}>
            <Deck/>
        </div>
    )
}