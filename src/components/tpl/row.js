import React, { Component } from 'react';
import PropTypes from 'prop-types';
import row from '../../assets/css/row.module.css';

export default class Row extends Component {
    static propTypes = {
        data: PropTypes.object
    }

    static defaultProps = {
        data: {}
    }

    constructor(props) {
        super(props);
        
    }

    render() {
        const { article_url, title, image_list, label, hot, media_name, comment_count, behot_time, publish_time } = this.props.data;
        return (
            <div className={row.row}>
                <a className={row['row__href']} href={article_url}>
                    <p className={row['row__title']}>{title}</p>
                    {
                        image_list.length > 0 && 
                        <ul className={row['row__list']}>
                            {
                                image_list.map((item, index) => {
                                    return <li key={index}><img src={item.url} /></li>;
                                })
                            }
                        </ul>
                    }
                    <div className={row['row__keys']}>
                        { label && <span className={row['row__label']}>{label}</span>}
                        { hot > 0 && <span className={row['row__hot']}>热</span>}
                        <span className={row['row__time']}>{media_name}</span>
                        <span className={row['row__time']}>评论 {comment_count}</span>
                        <span className={row['row__time']}>{behot_time - publish_time}</span>
                    </div>
                </a>
            </div>
        );
    }
}
