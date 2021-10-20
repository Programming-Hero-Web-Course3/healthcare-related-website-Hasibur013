import React, { useEffect, useState } from 'react';
import Detail from '../Detail/Detail';

const Details = () => {
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        fetch('./servicesData.json')
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [])
    return (
        <div>
            {
                detail.map(dt =>
                    <Detail
                        key={dt.id}
                        dt={dt}
                    ></Detail>
                )
            }
        </div>
    );
};

export default Details;