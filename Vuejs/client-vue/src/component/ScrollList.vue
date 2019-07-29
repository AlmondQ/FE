<template>
    <div>
        <slot></slot>
        <span v-if="status === 'loading'">loading</span>
        <span v-if="hasMore === false">loaded</span>
    </div>
</template>

<script>
export default {
    props: ['scrollElement', 'status', 'hasMore', 'scrollMethod'],
    watch: {
        scrollElement (val, oldValue) {
            this.scrollElement.addEventListener('scroll', function(event){
                const ele = event.target;
                const extra = 20;
                const clientHeight = ele.clientHeight;;
                const scrollHeight = ele.scrollHeight;
                const scrollTop = ele.scrollTop;
                if ( clientHeight + scrollTop + extra >= scrollHeight && this.hasMore === true && this.status !== 'loading') {
                    this.scrollMethod();
                }
            }.bind(this), false)
        }
    }
}
</script>