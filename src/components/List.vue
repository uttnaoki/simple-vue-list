<template>
  <v-container justify-center>
    <v-flex xs12>
      <h1>テストデータ</h1>
    </v-flex>
    <v-flex justify-center>
      <v-data-table :headers="headers" :items="testdata">
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
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

export default {
  created() {
    this.fetchTestdata();
  },
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "名前", value: "name" },
        { text: "値", value: "value" },
      ],
      testdata: [],
    };
  },
  methods: {
    fetchTestdata() {
      firebase
        .firestore()
        .collection(`users`)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            const fetchedData = {
              id: doc.data().id,
              name: doc.data().name,
              value: doc.data().value,
            };
            this.addData(fetchedData);
          });
        });
    },
    addData(data) {
      this.testdata.push(data);
    },
  },
};
</script>
