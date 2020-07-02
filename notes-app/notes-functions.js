// read notes from local storage
const getSavedNotes = () => {
    const noteJSON = localStorage.getItem('notes')

    if (noteJSON !== null) {
        return JSON.parse(noteJSON);
    }else{
        return [];
    }
}