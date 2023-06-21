<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-container style="height: 100%; width: 100%; display: flex;">
        <el-aside id="aside">

        </el-aside>

        <el-main id="main" style="flex: 1;">
            <el-container style="width: 100%; height: 100%; display: flex; flex-direction: column;">
                <el-header id="header">
                    <div class="header-div">
                        <div class="sub-header" style="height: 70px; width: 100%;">
                            <el-button link class="header-button">正在下载</el-button>
                            <el-button link class="header-button">已完成</el-button>
                            <el-button link class="header-button">回收站</el-button>
                            <div style="flex: 1; text-align: right;">
                                <el-button size="large" type="primary" :icon="Plus" circle
                                    style="font-size: 16pt;"></el-button>
                            </div>
                        </div>
                        <div class="sub-header" style="display: flex; flex: 1;">
                            <el-text style="font-size: 14pt; font-weight: bold; ">已暂停</el-text>
                            <div style="flex: 1; text-align: right;">
                                <el-button class="sub-header-button">全部开始</el-button>
                                <el-button class="sub-header-button">全部暂停</el-button>
                                <!-- <el-button type="info" plain>按时间排序</el-button> -->
                            </div>
                        </div>
                    </div>
                </el-header>

                <el-main style="flex: 1; padding: 0 20px 0;">
                    <div id="sub-main">
                        <el-table :data="data.taskList">
                            <el-table-column prop="name" label="名称" width="auto" />
                            <el-table-column prop="size" label="大小" width="auto" />
                            <el-table-column prop="stat" label="状态" width="auto" />
                        </el-table>
                    </div>
                </el-main>
            </el-container>
        </el-main>
    </el-container>
</template>

<style scoped>
#aside {
    height: 100%;
    width: 240px;
    background-color: hsla(27, 23%, 92%, 0.1);
    /* backdrop-filter: blur(10px); */
    display: flex;
    flex-direction: column;
}

#header {
    width: 100%;
    height: 130px;
}

.header-div {
    width: 100%;
    height: 100%;
    /* background-color: gray; */

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    border-bottom: 1px solid var(--el-border-color);
}

.sub-header {
    width: 100%;
    display: flex;
    align-items: center;
}

#main {
    background-color: white;
    border-left: 1px solid var(--el-border-color);
    box-sizing: border-box;
    box-shadow: var(--el-box-shadow-lighter);
    padding: 20px 0 0;
}

#sub-main {
    width: 100%;
    height: 100%;

    display: flex;
}

.header-button {
    font-size: 16pt;
    font-weight: bold;
}

.sub-header-button {
    font-size: 12pt;
}
</style>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue';
import { reactive } from 'vue';

const data = reactive({
    taskList: [
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
        // { name: "test task", size: '1024', stat: 'paused' },
    ]
});

</script>