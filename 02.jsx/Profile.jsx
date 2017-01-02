import React, { Component, PropTypes } from 'react';
import { DatePicker, Button, notification } from 'antd';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.likeFunc = this.likeFunc.bind(this)
        this.addHobby = this.addHobby.bind(this)
        this.delHobby = this.delHobby.bind(this)
        this.state = {
            liked: 0,
            hobbies: ['唱歌', '跳舞', '洗碗'],
            isLoading: false
        }
    }

    likeFunc() {
        let liked = this.state.liked;
        liked++;
        this.setState({
            liked
        })
    }

    addHobby() {
        this.setState({ isLoading: true });
        let txt = this.refs.hobby.value;
        if (!txt) {
            this.setState({ isLoading: false }, () => notification.error({
                message: '提醒',
                description: '添加失败,数据为空!',
            }));
            return;
        }
        let hobbies = this.state.hobbies;
        hobbies = [...hobbies, txt];
        this.setState({
            hobbies
        });
        setTimeout(() => this.setState({ isLoading: false }), 500);
        notification.success({
            message: '提醒',
            description: '已添加成功!',
        });
        txt = '';
    }

    delHobby(e) {
        let hobbies = this.state.hobbies;
        hobbies.splice(hobbies.indexOf(e.target.innerText), 1);
        this.setState({
            hobbies
        });
    }

    onChange(date, str) {
        console.log(date);
        console.log('当前时间为:' + str);
    }

    render() {
        return (
            <div>
                <h1>我的名字:{this.props.name}</h1>
                <h2>我的年龄:{this.props.age}</h2>
                <Button onClick={this.likeFunc}>给我点赞</Button>
                <h2>总点赞数:{this.state.liked}</h2>
                <h2>我的爱好:</h2>
                <ul>
                    {this.state.hobbies.map(x => <li key={x} onClick={e => this.delHobby(e)}>{x}</li>)}
                </ul>
                <input type="text" ref="hobby" />
                <Button onClick={this.addHobby} type="primary" icon="plus" loading={this.state.isLoading}>添加爱好</Button>
                <br />
                <DatePicker onChange={this.onChange} />
            </div>
        )
    }
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}


export default Profile;