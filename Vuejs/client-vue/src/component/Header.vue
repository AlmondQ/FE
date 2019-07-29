<template>
    <div class="header">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    @import 'compass/css3/flexbox';
    .header {
        @include display-flex(flex);
        @include justify-content(center);
        @include align-items(center);
        height: 50px;
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
</style>
