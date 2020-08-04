<template>
    <div>
        <h2>Todo List App</h2>
        <div class="add">
            <form @submit="onSubmit">
                <input type="text" v-model="title" placeholder="Add Todo ...">
                <select id ="myList">
                    <option value="" disabled selected>Choose Category</option>
                    <option v-for="categ in allCategories" :key="categ.id" :value=categ.title>{{categ.title}}</option>
                </select>
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>    
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "AddTodo",
    data() {
        return {
            title: "",
            newId: 0,
            category: ""
        };
    },
    methods: {
        ...mapActions(['addTodo']),
        onSubmit(e) {
            e.preventDefault();
            this.category = document.getElementById("myList").value;
            this.addTodo(this);
            this.newId++;
            this.title = '';
        }
    },
    computed: mapGetters(["allCategories"]),
}
</script>

<style scoped>
form{
    display: flex;
}

input[type="text"]{
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
}

input[type='submit']{
    flex: 2;
    background: #41b883;
    color:#fff;
    border: 1px #41b883 solid;
    cursor: pointer;
}
</style>