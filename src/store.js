import axios from "axios"
import { reactive } from "vue";

export const store = reactive({
    projects:[],
    paginations:[]
});


export function getDataFromApi() {
    axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
        const results = response.data;
        //recupero tutti i dati relativi ai progetti
        store.projects.push(...results.data)

        //recupero i dati della paginazione
        delete results.data;
        store.paginations.push(results)

    })
}

