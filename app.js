let box = new Vue({
    el:"#box",
    data:{
        all:[],
        con:'',
        status:'all'
    },
    methods: {
        add() {
            let obj = {};
            obj.content = this.con;
            obj.id = Math.random() + new Date().getTime();
            obj.status = '0';
            obj.edit = true;
            this.all.push(obj);
            this.con = '';
        },
        changeStatus(item) {
            if (item.status == 'all') {
                item.status = '1'
            } else if (item.status == '1') {
                item.status = '0'
            } else if (item.status == '0') {
                item.status = '1'
            }
        },
        check(status) {
            this.status = status;
        },
        del(item) {
            console.log(item)
            console.log(item.id)
            console.log(this.datas)
            this.all = this.all.filter((a) => {
                return a.id != item.id
            })
        },
        edit(item){
            item.edit=!item.edit;
        }
    },
    computed:{
        datas(){
            return this.all.filter((a)=>{
                if(this.status=='all'){
                    return a;
                }else if(a.status==this.status){
                    return a;
                }
            })
        }
    }
})