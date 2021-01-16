let count = 5;

const data = [
    {
        id: 0,
        desc: 'Go to the shopping',
        done: true
    },
    {
        id: 1,
        desc: 'Make a lunch',
        done: true
    },
    {
        id: 2,
        desc: 'Learn JS',
        done: false
    },
    {
        id: 3,
        desc: 'Do workout',
        done: true
    },
    {
        id: 4,
        desc: 'Read a book',
        done: true
    }
]

const add = (item) => {
    data.push({
        id: count++,
        ...item
    });
};

const deleteById = (id) => {
    let index = data.findIndex(item => id === item.id);
    data.splice(index, 1);
};

const changeById = (id, newItem) => {
    let index = data.findIndex(item => id === item.id);
    data.splice(index, 1, { id: id, ...newItem });
}

export default {
    data,
    add,
    deleteById,
    changeById,
    count
}