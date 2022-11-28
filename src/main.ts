import './style.css';
// import menuItem from './menuItem.html?raw';

function createMenuItem(menuItem: MenuItem): string {
    //return `<li>${menuItem.text}${menuItem.items?.map(createMenuItem).join('') || ''}</li>`;

    //console.log('>>>-------- enter', menuItem.text);


    let nestedMenu = '';

    if (menuItem.items) {
        const nestedArray = menuItem.items.map((item) => {
            const nestedItem = createMenuItem(item);
            return nestedItem;
        }).join('');

        nestedMenu = `<ul>${nestedArray}</ul>`;

        //console.log('         recursion result', menuItem.text, 'nestedMenu', nestedMenu);
    }


    const listItem = `<li>${menuItem.text}${nestedMenu}</li>`;

    //console.log('<<<-------- exit', menuItem.text);

    return listItem;
}

type MenuItem = {
    text: string;
    items?: MenuItem[];
};

const menu: MenuItem = {
    text: 'about',
    items: [
        { text: 'contact1' },
        {
            text: 'sub-about',
            items: [
                { text: 'sub-contact1' },
                { text: 'sub-contact2' },
                { text: 'sub-contact3' },
            ]
        },
        { text: 'contact3' },
    ]
};


function main() {

    //console.log('app', menu);

    const newMenu = createMenuItem(menu);
    console.log('sub', newMenu);


    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
        <ul>${newMenu}</ul>
    `;
}

main();