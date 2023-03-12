<script setup>
import {NButton, NSpace, NInput, NList, NListItem, NDivider} from "naive-ui";
</script>

<template>
    <NSpace size="large" justify="center">
        <NInput size="large" placeholder="请输入用户姓名" round/>
        <NButton size="large" type="primary" round ghost>查询</NButton>
    </NSpace>

    <NDivider />

    <NList>
        <NListItem>

        </NListItem>
    </NList>
</template>