<template>
    <nav class="navbar navbar-expand-md  fixed-top">
        <b-img class="logo" src="logo1.jpg" rounded="circle"  fluid alt="Responsive image"></b-img>
        <div class="collapse navbar-collapse " id="navbarCollapse" >
            <ul class="navbar-nav ml-auto">
               <li class="nav-item">
                    <router-link class="nav-link" to="/">首页</router-link>
               </li>
               <li class="nav-item">
                    <router-link class="nav-link" to="/Sofotware">下载真心脱单App</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">联系我们</router-link>
               </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
    .logo{
        width: 60px;
        height: 60px;
    }
    .nav-item{
        padding:2px;
        margin-left: 7px;
    }
    .nav-link{
        color: black;
    }
   
</style>