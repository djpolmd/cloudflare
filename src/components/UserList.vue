<template>
  <DataTable :value="users" tableStyle="min-width: 50rem">
    <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
  </DataTable>
</template>

<script>
import axiosService from "../axiosService";
export default {
  name: "UserList",
  data() {
    return {
      users: null,
      columns: null
    };
  },
  created() {
    this.columns = [
      { field: '_id', header: 'id' },
      { field: 'user_id', header: 'user_id' },
      { field: 'name', header: 'name' },
      { field: 'email', header: 'email' },
      { field: 'password', header: 'password' },
    ];
  },
  mounted() {
    axiosService.getUserList().then((r) => {
        console.log(r.data);
        this.users = r.data
    })
  },

  users: [{
    '_id': "232332",
    'user_id': "3232",
    'name' : "Vasia",
    'email' : "jskdj@jdksjkd.skl",
    'password' : "password"
  }
  ]


}
</script>

<style scoped>

</style>