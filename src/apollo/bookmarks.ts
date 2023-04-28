import { gql, makeVar, ReactiveVar } from '@apollo/client';
import bookmarks from '../../pages/bookmarks';
import { CardI } from '../components/CardItem';

/*** User bookmarks*/

const KEY = 'bookmarks';

export const GET_BOOKMARKS = gql`
    query GetAllTodos {
        bookmarks @client
    }
`;

export const bookmarksVar: ReactiveVar<CardI[]> = makeVar<CardI[]>(
    persistentRead()
);

// Change bookmarks list
export const toggleBookmark = (card: CardI) => {
    const bookmarks = bookmarksVar();

    if (!bookmarks.find(el => el.id === card.id)) {
        bookmarksVar([...bookmarks, card])
    } else {
        bookmarksVar(bookmarks.filter(el => el.id !== card.id));
    }

    persistentWrite();
}

// Local Storage
function persistentWrite() {
    const bookmarks = bookmarksVar();
    window.localStorage.setItem(KEY, JSON.stringify(bookmarks));
}

function persistentRead() {
    try {
        const item = window.localStorage.getItem(KEY);
        if (item) {
            return JSON.parse(item);
        }
    }catch (err) {
        console.error('Localstorage parsing error', err);
    }

    return [];
}

