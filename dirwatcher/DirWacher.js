import fs from 'fs';
import events from 'events';
export class DirWacher{

    constructor (path, delay){
        this.path = path;
        this.delay = delay;
        this.content = [];
    }

    watch(){
        console.log(this.path);
        setInterval(this.checkDir,this.delay,this);
        // setInterval(function(){
        //     let newContent = fs.readdir(this.path, function(err, list){
        //         if (err) return err;
        //         if(!list.equals(content)){
        //             this.content = list;
        //             console.log('Changed!');
        //         }
        //     });
        // },this.delay, this);
    }

    checkDir(dir) {
        console.log(dir);
        let newContent = fs.readdir(dir.path, function(err, list){
            if (err) return err;
            console.log(list)
            if(!list.every(e => dir.content.includes(e))){
                dir.content = list;
                console.log('Changed!');
            }else{
                console.log('Nothing changed!');
            }
        });

    }

}

//module.exports = DirWacher;