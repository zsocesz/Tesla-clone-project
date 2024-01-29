import './Item.css';

export default function Item({heading, image}) {
    return (
        <section className="item" style={{backgroundImage: `url(${image})`}}>
            <div className="container">
                <div className="item-text">
                    <h1>{heading}</h1>
                </div>

                <div className="item-buttons">
                    <button>Egyedi Megrendelés</button>
                    <button>Raktárkészlet</button>
                </div>
            </div>
        </section>
    );
}
