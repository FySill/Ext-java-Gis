package fly.login.service;

import fly.login.dao.UserDAO;
import fly.login.model.User;

public class UserManager implements IUserManager{
	
	private UserDAO userDao;

	@Override
	public boolean exists(User u) throws Exception {
		return userDao.checkExistByName(u.getUsername());
	}

	@Override
	public void add(User u) throws Exception {
		userDao.add(u);
	}

	public UserDAO getUserDao() {
		return userDao;
	}

	public void setUserDao(UserDAO userDao) {
		this.userDao = userDao;
	}
}
