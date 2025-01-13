const rolePermissions = {
    Admin: [
        'Admin.html',
        'create-user.html',
        'manage-users.html',
        'manage-posts.html',
        'create-post.html',
        'edit-post.html'
    ],
    User: [
        'User.html',
        'manage-posts.html',
        'create-post.html',
        'edit-post.html'
    ],
};

// Hàm kiểm tra quyền truy cập
function checkAccess() {
    const currentPage = window.location.pathname.split('/').pop(); // Lấy tên file hiện tại
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userRole = localStorage.getItem('userRole');

    // Kiểm tra đăng nhập
    if (!isLoggedIn) {
        alert('Bạn cần đăng nhập để truy cập trang này!');
        window.location.href = 'Login.html';
        return;
    }

    // Kiểm tra quyền truy cập
    if (!rolePermissions[userRole] || !rolePermissions[userRole].includes(currentPage)) {
        alert('Bạn không có quyền truy cập vào trang này!');
        window.location.href = '403.html'; // Trang lỗi 403
        return;
    }
}