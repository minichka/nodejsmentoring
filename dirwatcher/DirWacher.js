import fs from 'fs';

class DirWacher{

    constructor(path, delay){
        this.path = path;
        this.delay = delay;
        this.content = [];
    }

    watch(){
        setInterval(this.checkDir,this.delay);
    }

    checkDir(){
        let newContent = fs.readdir(this.path, function(err, list){
            if (err) return err;
            if(!list.equals(this.content)){
                this.content = list;
                console.log('Changed!');
            }
        });

    }

}

module.exports = DirWacher;