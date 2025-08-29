<template>
<li>{{ book.title }} - {{ book.author }}
    <button @click="$emit('toggle-read' , book.id)">{{ book.read ?'خوانده شده' : 'خوانده نشده' }}</button>
</li>
</template>

<script>
export default{
    props:['book'],
    emits:['toggle-read']
}
</script>

<style>
li {
  font-size: 16px;
  margin: 6px 0;
  list-style: none;
}
button {
  margin-left: 10px;
  padding: 2px 6px;
  font-size: 14px;
  cursor: pointer;
}
</style>