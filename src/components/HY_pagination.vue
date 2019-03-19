/*
* 分页器:
* 用法: <HY-pagination :totalNumber="0" :limitNumber="0" @HY_page="func1($event)"></HY-pagination>;
* totalNumber = number,                                 // 总数量;  必须
* limitNumber = number,                                 // 每页个数;  默认10个
* simpleType = boolean,                                 // 简洁模式;  默认非简介模式
* func1: 点击页码时,触发该函数,返回参数是当前选中的页码;
* */

<template>
    <div>
        <div class="HY-pagination-container">
            <div class="display-inline-block" v-if="!isSimpleType">总数: {{totalNumber || 0}}</div>
            <div class="display-inline-block" v-if="!isSimpleType">总页数: {{totalPage}}</div>
            <div class="display-inline-block arrow arrow-left">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" v-if="currentPage > 0" @click="previousPage()">
                    <line x1="10" y1="4" x2="4" y2="7" stroke="rgb(0, 47, 167)" stroke-width="1"></line>
                    <line x1="10" y1="10" x2="4" y2="7" stroke="rgb(0, 47, 167)" stroke-width="1"></line>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" v-if="currentPage <= 0" class="disabled-arrow">
                    <line x1="10" y1="4" x2="4" y2="7" stroke="#eeeeee" stroke-width="1"></line>
                    <line x1="10" y1="10" x2="4" y2="7" stroke="#eeeeee" stroke-width="1"></line>
                </svg>
            </div>
            <div class="display-inline-block">
                <div class="display-inline-block number" v-for="(i, index) in numberList"
                     :class="{'selected': currentPage === index}"
                     v-if="numberList.length < 6">
                    <span class="number-span" @click="selectPage(index)">{{index + 1}}</span>
                </div>
                <div class="display-inline-block number" v-for="(i, index) in numberList"
                     :class="{'selected': currentPage === index}"
                     v-if="numberList.length >= 6 && ((index >= currentPage - 2 && index <= currentPage + 2)
                       || index === numberList.length - 1 || index === 0)">
                    <span class="number-span" v-if="index === 0" @click="selectPage(index)">1</span>
                    <span class="number-span" v-else-if="index >= currentPage -1 && index <= currentPage + 1" @click="selectPage(index)">{{index + 1}}</span>
                    <span class="number-span" v-else-if="(index === currentPage - 2 || index === currentPage + 2) && index !== numberList.length - 1 && index !== 0">···</span>
                    <span class="number-span" v-else-if="index === numberList.length - 1" @click="selectPage(index)">{{numberList.length}}</span>
                </div>

            </div>
            <div class="display-inline-block arrow arrow-right">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" v-if="currentPage < numberList.length - 1" @click="nextPage()">
                    <line x1="4" y1="4" x2="10" y2="7" stroke="rgb(0, 47, 167)" stroke-width="1"></line>
                    <line x1="4" y1="10" x2="10" y2="7" stroke="rgb(0, 47, 167)" stroke-width="1"></line>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" v-if="currentPage >= numberList.length - 1" class="disabled-arrow">
                    <line x1="4" y1="4" x2="10" y2="7" stroke="#eeeeee" stroke-width="1"></line>
                    <line x1="4" y1="10" x2="10" y2="7" stroke="#eeeeee" stroke-width="1"></line>
                </svg>
            </div>
            <input type="number" class="input-number" oninput="if(value.length>4)value=value.slice(0,4)" v-model="inputNumber">
            <div class="display-inline-block jump" @click="jumpPage(inputNumber)">GO</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HY-pagination',
        props: ['totalNumber', 'limitNumber', 'simpleType'],
        data () {
            return {
                isSimpleType: false,
                totalPage: 0,
                numberList: [],
                currentPage: 0,
                inputNumber: 0
            }
        },
        watch: {
          totalNumber(newValue, oldValue) {
            this.init();
          }
        },
        methods: {
            init: function () {
                this.isSimpleType = this.simpleType;
                let limitNumber = this.limitNumber || 10;
                this.totalPage = this.totalNumber%limitNumber === 0 ? parseInt(this.totalNumber/limitNumber): parseInt(this.totalNumber/limitNumber) +1;

                this.numberList = [];
                if(this.totalPage > 0){
                    for(let i=0;i<this.totalPage;i++){
                        this.numberList[i] = {};
                        this.$set(this.numberList[i], 'isSelected', false);
                    }
                    this.$set(this.numberList[0], 'isSelected', true);
                }
            },
            selectPage: function (page) {
                if(this.currentPage !== page){
                    this.currentPage = page;
                    this.$emit('HY_page', this.currentPage + 1);
                }
            },
            previousPage: function () {
                this.currentPage -= 1;
                this.$emit('HY_page', this.currentPage + 1);
            },
            nextPage: function () {
                this.currentPage += 1;
                this.$emit('HY_page', this.currentPage + 1);
            },
            jumpPage: function (page) {
                if(parseInt(page) <= this.numberList.length && parseInt(page) > 0 && this.currentPage !== parseInt(page) - 1){
                    this.currentPage = parseInt(page) - 1;
                    this.$emit('HY_page', this.currentPage + 1);
                }
            }
        },
        mounted () {
            this.init();
        }
    }
</script>
<style scoped>
    .HY-pagination-container{
        padding: 4px;
        font-size: 16px;
    }
    .display-inline-block{
        display: inline-block;
        height: 21px;
        position: relative;
    }
    .arrow{
        background: transparent;
    }
    .arrow svg{
        /*width: 14px;*/
        /*height: 14px;*/
        width: 21px;
        height: 21px;
        padding: 3.6px;
        border: 1px solid rgb(0, 47, 167);
        border-radius: 4px;
        position: relative;
        top: 6px;
        cursor: pointer;
    }
    .number{
        border: 1px solid rgb(0, 47, 167);
        border-radius: 4px;
        margin-right: 4px;
    }
    .number.selected{
        background: rgb(0, 47, 167);
        color: white;
    }
    .number-span{
        padding: 0 4px;
        cursor: pointer;
    }
    .input-number{
        width: 36px;
        height: 19px;
        border: 1px solid rgb(0, 47, 167);
        border-radius: 4px;
        position: relative;
        /*top: -2px;*/
    }
    .input-number:focus{
        box-shadow: 0 0 2px 1px rgb(0, 47, 167);
        outline: none;
    }
    .arrow svg.disabled-arrow{
        border: 1px solid #eeeeee;
    }
    .jump{
        border: 1px solid rgb(0, 47, 167);
        border-radius: 4px;
        margin-right: 4px;
        padding: 0 4px;
        cursor: pointer;
    }
</style>
