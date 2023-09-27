import css from './Statistics.module.css';
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function generateRandomColor(colorOption = ['red', 'green', 'blue']) {
  let red, green, blue;
  if (Array.isArray(colorOption)) {
    const randomColorNumber = Math.floor(Math.random() * colorOption.length);
    colorOption = colorOption[randomColorNumber];
  }
  if (colorOption === 'random') {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
  } else if (colorOption === 'pink') {
    red = Math.floor(Math.random() * 56) + 200;
    green = Math.floor(Math.random() * 51) + 100;
    blue = Math.floor(Math.random() * 41) + 180;
  } else if (colorOption === 'purple') {
    red = Math.floor(Math.random() * 61) + 100;
    green = Math.floor(Math.random() * 21);
    blue = Math.floor(Math.random() * 51) + 150;
  } else if (colorOption === 'blue') {
    red = Math.floor(Math.random() * 31);
    green = Math.floor(Math.random() * 101);
    blue = Math.floor(Math.random() * 256);
  } else if (colorOption === 'green') {
    red = Math.floor(Math.random() * 101);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 101);
  } else if (colorOption === 'yellow') {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 51) + 200;
    blue = Math.floor(Math.random() * 101);
  } else if (colorOption === 'orange') {
    red = Math.floor(Math.random() * 201) + 55;
    green = Math.floor(Math.random() * 101);
    blue = Math.floor(Math.random() * 51);
  } else if (colorOption === 'red') {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 71);
    blue = Math.floor(Math.random() * 71);
  }

  return `rgb(${red}, ${green}, ${blue})`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <>{title && <h2 className={css.title}>{title}</h2>}</>
      <ul className={css.items}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={css.item}
            style={{
              backgroundColor: generateRandomColor(),
              color: 'white',
            }}
          >
            <span className="label">{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
