import React, { Component } from 'react';

class Counter extends Component {
    statez = { 
        count: 1,
        tags: ['tag1','tag2','tag3']
       
    };

    renderTags() {
        if(this.statez.tags.length === 0) return <p>There are no tags</p>
        return( this.statez.tags.map(tag=> <li key={tag}>{ tag }</li>) )
    }
    render() { 
        
        return ( 
            <div>
                {this.statez.tags.length === 0 && 'no tags'}
                <ul>
                    {this.renderTags()}
                </ul>
            </div> 
        );
    }
}
 
export default Counter;