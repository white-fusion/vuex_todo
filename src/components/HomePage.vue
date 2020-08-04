<template>
    <div>
        <div class="addCateg">
            <h2>Todo List App</h2>
            <div class="add">
                <form @submit="onSubmit">
                    <input type="text" v-model="title" placeholder="Add Category ...">
                    <input type="submit" value="Submit">
                </form>
            </div>
        </div>
        <div class="categories">
            <div
            @click="updateTodo(todo.id)"
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

export default {
    name: "HomePage",
    data() {
        return {
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
        }
    },
    computed: mapGetters(["allCategories"]),
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
</style>