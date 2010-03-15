/**
 * Vosao CMS. Simple CMS for Google App Engine.
 * Copyright (C) 2009 Vosao development team
 * 
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 *
 * email: vosao.dev@gmail.com
 */

package org.vosao.plugins.register.cronjob;

import java.util.Date;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.joda.time.DateTime;
import org.vosao.business.plugin.PluginCronJob;
import org.vosao.plugins.register.dao.RegisterDao;
import org.vosao.plugins.register.entity.RegisterConfigEntity;
import org.vosao.plugins.register.entity.RegistrationEntity;

public class CleanupConfirmationsJob implements PluginCronJob {

	private static final Log logger = LogFactory.getLog(
			CleanupConfirmationsJob.class);

	private RegisterDao registerDao;
	private int days;
	
	public CleanupConfirmationsJob(RegisterDao aRegisterDao) {
		setRegisterDao(aRegisterDao);
		RegisterConfigEntity config = getRegisterDao().getRegisterConfigDao()
				.getConfig();
		days = config.getClearDays();
	}
	
	@Override
	public boolean isShowTime(Date date) {
		DateTime dt = new DateTime(date);
		// start at 01:00
		return dt.hourOfDay().get() == 1 && dt.minuteOfHour().get() == 0;
	}

	@Override
	public void run() {
		logger.info("Cleanup confirmations.");
		DateTime dt = new DateTime();
		dt = dt.minusDays(days);
		for (RegistrationEntity reg : getRegisterDao().getRegistrationDao().select()) {
			if (dt.isAfter(reg.getCreatedDate().getTime())) {
				getRegisterDao().getRegistrationDao().remove(reg.getId());
			}
		}
	}

	public RegisterDao getRegisterDao() {
		return registerDao;
	}

	public void setRegisterDao(RegisterDao registerDao) {
		this.registerDao = registerDao;
	}

}
