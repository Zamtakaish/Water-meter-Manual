import React from 'react';
import './ControlPanel.css';
import ControlPanelElement from "./ControlPanelElement";

function ControlPanel(props) {

/*    const controlOptions = [
        {key: 1, value: 'Информация'},
        {key: 2, value: 'Подключение'},
        {key: 3, value: 'Перед поверкой'},
        {key: 4, value: 'Поверка 1'},
        {key: 5, value: 'Поверка 2'},
        {key: 6, value: 'Дополнительно'}
    ];*/
    const controlOptions = [[
        'Информация',
        'Подключение',
        'Перед поверкой',
        'Поверка 1',
        'Поверка 2',
        'Дополнительно'
    ],
        [
            'Информация',
            'Подключение',
            'Перед поверкой',
            'Поверка',
            'Дополнительно',
            'Placeholder',
            'Placeholder',
            'Placeholder'
        ]
    ];

    return (
        <ul className='main__workspace__controlPanel'>
            {
                controlOptions[props.deviceClass].map((element, id) =>
                    <ControlPanelElement key={id} value={element}/>
                )
            }
        </ul>
    );
}

export default ControlPanel;