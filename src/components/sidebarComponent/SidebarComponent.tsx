import React from 'react';
import Cities from '../../assets/data/bootcamps.json';
import { ICity } from '../../models/ICity';

const SidebarComponent = () => {
    const cityListItems = Cities.cities.map((city: ICity) => {
        return <li>{city.cityName}</li>;
    });

    return (
        <aside className="col-4 sidebar">
            <ul>{cityListItems}</ul>
        </aside>
    );
};

export default SidebarComponent;