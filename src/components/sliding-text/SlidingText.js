import React from 'react'
import './slidingText.css'

/**
 * @param {string} tag - Tag name you wish to animate or 'component'
 * @param {string} text - Text you wish to animate
 * @param {string} animation - Animation you wish to use
 * @param {string} delay - Animation delay in seconds ie. '.5s' up to .9
 * @param {string} url - Optional href if this is a link
 * @param {object} component - A react component 
 */

const SlidingText = ({
  tag = 'NoTagParam', 
  text = 'Add text dummy!', 
  animation = 'fadeInUp', 
  delay = '0.5s',
  url = 'google.com/add-an-href',
  children
}) => {

  let line

  switch(tag){
    case 'h1': 
      line = <h1 className={`${animation} delay-${delay}ds`}>{text}</h1>
      break;
    case 'h2': 
      line = <h2 className={`${animation} delay-${delay}ds`}>{text}</h2>
      break;
    case 'h3': 
      line = <h3 className={`${animation} delay-${delay}ds`}>{text}</h3>
      break;
    case 'h4': 
      line = <h4 className={`${animation} delay-${delay}ds`}>{text}</h4>
      break;
    case 'h5': 
      line = <h5 className={`${animation} delay-${delay}ds`}>{text}</h5>
      break;
    case 'h6': 
      line = <h6 className={`${animation} delay-${delay}ds`}>{text}</h6>
      break;
    case 'p': 
      line = <p className={`${animation} delay-${delay}ds`}>{text}</p>
      break;
    case 'span': 
      line = <span className={`${animation} delay-${delay}ds`}>{text}</span>
      break;
    case 'a': 
      line = <a href={url} className={`${animation} delay-${delay}ds`}>{text}</a>
      break;
    case 'component':
      line = <div
        className={`${animation} delay-${delay}ds`}
      >
        {children}
      </div>
      break;
    default:
      line = <h1>Add Tag Param Dummy</h1>
      break;
  }

  return line
}

export default SlidingText