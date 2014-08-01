/**
 * @author chengfei
 *
 */
package fly.login.service;

import fly.login.model.User;

public interface IUserManager {

	public abstract boolean exists(User u) throws Exception;

	public abstract void add(User u) throws Exception;

}