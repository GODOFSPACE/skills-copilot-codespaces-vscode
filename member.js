function skillsMember(){
    var skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'Java', 'C++', 'C#', 'SQL'];
    var member = ['Huy', 'Quan', 'Duc', 'Duong', 'Tuan', 'Hieu', 'Dung', 'Hoa', 'Hue', 'Hoa'];
    var result = [];
    for (var i = 0; i < member.length; i++){
        var obj = {};
        obj.name = member[i];
        obj.skill = skills[i];
        result.push(obj);
    }
    return result;
}