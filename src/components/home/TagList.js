import React from 'react'
import { Card, Tag } from 'antd';


function TagList({ tags, renderPost }) {

    return (
        <Card title="Popular tag" bordered={false} style={{ background: "#F3F3F3" }}>
            {tags.length > 0 ?
                tags.map(tag => {
                    return (
                        <Tag color="#818A91" key={tag}>
                            <div className="btn-tag" onClick={() => { renderPost(tag) }}>{tag}</div>
                        </Tag>)
                }) : "No result found"
            }
        </Card >
    )
}

export default TagList
