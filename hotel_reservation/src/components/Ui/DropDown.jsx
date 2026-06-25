const Dropdown = ({ items }) => {
  return (
    <div className="w-56 rounded-lg border bg-white">
      {items.map((item) => (
        <div key={item.label} className="group relative">
          <button className="flex w-full justify-between p-3 hover:bg-gray-100">
            {item.label}
            <span>›</span>
          </button>

          {item.children && (
            <div
              className="
                absolute left-full top-0 ml-1
                hidden min-w-40
                rounded-lg border bg-white
                group-hover:block
              "
            >
              {item.children.map((child) => (
                <button
                  key={child.label}
                  className="block w-full p-3 text-left hover:bg-gray-100"
                >
                  {child.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dropdown