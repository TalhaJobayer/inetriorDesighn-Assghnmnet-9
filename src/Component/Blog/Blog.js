import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
            <>
        <div className='symentic'>
            <h1>what is Context api?</h1>
            <p>Context api provides a way to pass data through the component tree without having to pass props down manually at every level.it is a way for a React app to effectively produce global variables that can be passed around.and also this is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
        </div>
        <div className='symentic'>
            <h1>what is semantic tags ?</h1>
            <p>Semantic tags are those that clearly describe their meaning in a human- and machine-readable way.In HTML there are some semantic tags that can be used to define different parts of a web page</p>
            <h3>example: </h3><span className='example'>article,aside,details,figcaption,figure,footer,header, main, mark nav,section</span>
       
        </div>
        
            </>
    );
};

export default Blog;