<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
      <q-input
        v-model="newTask"
        @keyup.enter="addTask()"
        class="col"
        square
        bg-color="white"
        filled
        label="Add Task"
        dense
      >
        <template v-slot:append>
          <q-btn round dense flat icon="add" @click="addTask()" />
        </template>
      </q-input>
    </div>
    <q-list class="bg-white" separator bordered>
      <!--
        Rendering a <label> tag (notice tag="label")
        so QCheckboxes will respond to clicks on QItems to
        change Toggle state.
      -->

      <q-item
        tag="label"
        v-for="(task, index) in tasks"
        :key="task.title"
        v-ripple
        :class="{ 'done bg-blue-1': task.done }"
      >
        <q-item-section avatar>
          <q-checkbox v-model="task.done" val="teal" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label> {{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn
            @click.stop="deleteTask(index)"
            round
            dense
            color="primary"
            icon="delete"
          />
        </q-item-section>
      </q-item>
    </q-list>

    <div v-if="!tasks.length" class="no-tasks absolute-center">
      <q-icon name="check" size="100px" color="primary" />
      <div class="text-h5 text-primary text-center">
        No tasks
      </div>
    </div>
  </q-page>
</template>

<script>
import { LocalStorage } from "quasar";

export default {
  data() {
    return {
      newTask: "",
      tasks: []
    };
  },
  mounted() {
    if (!LocalStorage.isEmpty()) this.tasks = LocalStorage.getItem("allTasks");
  },
  methods: {
    addTask() {
      this.tasks.push({ title: this.newTask, done: false });
      LocalStorage.set("allTasks", this.tasks);
      this.$q.notify("Task saved!");
    },
    deleteTask(index) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Really Delete?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.tasks.splice(index, 1);
          LocalStorage.set("allTasks", this.tasks);
          this.$q.notify("Task deleted!");
        });
    }
  }
};
</script>

<style lang="scss">
.done {
  .q-item__label {
    color: gray;
    text-decoration: line-through;
  }
}

.no-tasks {
  opacity: 0.5;
}
</style>
