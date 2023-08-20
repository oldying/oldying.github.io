var posts=["2023/07/03/php-str-cut-and-merge/","2023/07/14/phprobot-list/","2023/07/04/php-array-01/","2023/07/03/typora/","2023/07/03/teachercurl/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"月亮博客","hundredSuffix":"","link":"http://blog.monl.cc/","avatar":"https://image.muerg.cn/2/2023/06/30/649edb43b7a43.webp","descr":"热爱学习 热爱编程","siteshot":"https://w.wallhaven.cc/full/d6/wallhaven-d6eyp3.jpg"},{"name":"月亮Moon","hundredSuffix":"","link":"http://blog.monl.cc/","avatar":"https://image.muerg.cn/2/2023/06/30/649edb43b7a43.webp","descr":"热爱生活 热爱编程"}];
    var refreshNum = 1;
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };