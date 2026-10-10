const CATEGORIES = ['Все', 'Работа', 'Учёба', 'Дом'];

function CategoryFilter({ current, onChange, tasks = [] }) {
  const countFor = (cat) =>
    cat === 'Все'
      ? tasks.length
      : tasks.filter((t) => t.category === cat).length;

  return (
    <div className="category-filter">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          type="button"
          className={current === cat ? 'active' : ''}
          onClick={() => onChange(cat)}
        >
          {cat} <span className="count">{countFor(cat)}</span>
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;