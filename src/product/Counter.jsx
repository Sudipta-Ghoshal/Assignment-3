
export default function Counter({ item, onAdd, onRemove }) {

    return (
        <div className="flex items-center space-x-2">
            <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center" onClick={onRemove}>−</button>
            <span className="text-sm">{item.quentity}</span>
            <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center" onClick={onAdd}>+</button>
        </div>
    );
}