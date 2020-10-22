<template>
  <v-container justify-center>
    <v-flex xs12>
      <h1>テストデータ</h1>
    </v-flex>
    <v-flex justify-center>
      <v-data-table :headers="headers" :items="parks">
        <template v-slot:items="props">
          <td class="text-xs-left">{{ props.item.id }}</td>
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.address }}</td>
        </template>
      </v-data-table>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "名前", value: "name" },
        { text: "値", value: "value" },
      ],
      parks: [
        {
          id: 1,
          name: "data1",
          value: "10",
        },
        {
          id: 2,
          name: "data2",
          value: "20",
        },
      ],
    };
  },
};
</script>
