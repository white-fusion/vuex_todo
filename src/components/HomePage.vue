<template>
    <div class="container">
        <AddTodo />
        <div class="addCateg">
            <h2>Categories</h2>
            <div class="add">
                <form @submit="onSubmit">
                    <input type="text" v-model="title" placeholder="Add New Category ...">
                    <input type="submit" value="Add">
                </form>
            </div>
        </div>
        <h3>Double click to view todos of a specific category</h3>
        <div class="categories">
            <div
            @dblclick="openCategory(category.title)"
            v-for="category in allCategories"
            :key="category.id"
            class="category"
            >
                {{ category.title }}
                <i @click="deleteCategory(category.id)" class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div> 
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AddTodo from './AddTodo.vue';

export default {
    name: "HomePage",
    data() {
        return {
            title: "",
            newId: 4,
        };
    },
    methods: {
        ...mapActions(['addCategory', 'deleteCategory']),
        onSubmit(e) {
            e.preventDefault();
            this.addCategory(this);
            this.newId++;
            this.title = '';
        },
        openCategory(name) {
            this.$router.push({ name: 'Categs', params: { title: name}});
        }
    },
    computed: mapGetters(["allCategories"]),
    components: {
    AddTodo
  }
}
</script>

<style scoped>
.categories {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
}
.category {
    color: white;
    border: 1px solid #ccc;
    background: #750d0d;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
}

form{
    display: flex;
}

input[type="text"]{
    flex: 10;
    padding: 10px;
    border: 1px solid #b84141;
    outline: 0;
}

input[type='submit']{
    flex: 2;
    background: #b84141;
    color:#fff;
    border: 1px #b84141 solid;
    cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>