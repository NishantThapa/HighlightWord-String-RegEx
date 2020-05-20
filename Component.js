import React from 'react'
var _ = require('lodash');

const Highlighted = ({text = '', highlight = ''}) => {
    if (!highlight.trim()) {
      return <span>{text}</span>
    }
    const regex = new RegExp(`(${_.escapeRegExp(highlight)})`, 'gi')
    const parts = text.split(regex)
    const MarkStyle={
      backgroundColor:"#ffe2e0",
      borderRadius: "4px"
    }
    return (
      <span>
         {parts.filter(part => part).map((part, i) => (
             regex.test(part) ? <mark style={MarkStyle} key={i}>{part}</mark> : <span key={i}>{part}</span>
         ))}
     </span>
    )
 }

export default Highlighted
