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


function backServiceFailed(e) {
	if (e != null) {
		error('Can\'t connect to server. ' + e + e.message);
		return true;
	}
	return false;
}

/**
 * Backend services.
 */

var pageService = {
	
	getTree: function(func) {
		jsonrpc.pageService.getTree(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		});
    },
    
	getPage: function(func, id) {
		jsonrpc.pageService.getPage(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, id);
    },
    
	getPageByUrl: function(func, url) {
		jsonrpc.pageService.getPageByUrl(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, url);
    },

    savePage: function(func, page) {
		jsonrpc.pageService.savePage(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, page);
    },

    updateContent: function(func, pageId, content, languageCode) {
		jsonrpc.pageService.updateContent(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, pageId, content, languageCode);
    },

    getChildren: function(func, id) {
		jsonrpc.pageService.getChildren(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, id);
    },
    
    deletePages: function(func, ids) {
		jsonrpc.pageService.deletePages(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, ids);
    },
    
    getContents: function(func, pageId) {
		jsonrpc.pageService.getContents(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, pageId);
    },

    getPageVersions: function(func, url) {
		jsonrpc.pageService.getPageVersions(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, url);
    },

    addVersion: function(func, url, versionTitle) {
		jsonrpc.pageService.addVersion(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, url, versionTitle);
    },
    
    approve: function(func, pageId) {
		jsonrpc.pageService.approve(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, pageId);
    },
};

var templateService = {
		
	getTemplates: function(func) {
		jsonrpc.templateService.getTemplates(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		});
    },

    deleteTemplates: function(func, ids) {
		jsonrpc.templateService.deleteTemplates(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, ids);
    },
    
    getTemplate: function(func, id) {
		jsonrpc.templateService.getTemplate(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, id);
    },
    
    saveTemplate: function(func, vo) {
		jsonrpc.templateService.saveTemplate(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, vo);
    },

    updateContent: function(func, templateId, content) {
		jsonrpc.templateService.updateContent(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, templateId, content);
    },
    
};

var commentService = {
		
	getByPage: function(func, id) {
		jsonrpc.commentService.getByPage(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, id);
	},

	enableComments: function(func, ids) {
		jsonrpc.commentService.enableComments(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, ids);
	},
	
	disableComments: function(func, ids) {
		jsonrpc.commentService.disableComments(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, ids);
	},
	
	deleteComments: function(func, ids) {
		jsonrpc.commentService.deleteComments(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, ids);
	},
};

var folderService = {
		
	getTree: function(func) {
		jsonrpc.folderService.getTree(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		});
	},

	getFolderPath: function(func, id) {
		jsonrpc.folderService.getFolderPath(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, id);
	},

	getFolder: function(func, id) {
		jsonrpc.folderService.getFolder(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, id);
	},

	getByParent: function(func, id) {
		jsonrpc.folderService.getByParent(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, id);
	},
	
	saveFolder: function(func, vo) {
		jsonrpc.folderService.saveFolder(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, vo);
	},
	
	deleteFolder: function(func, ids) {
		jsonrpc.folderService.deleteFolder(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, ids);
	},
	
};

var fileService = {
		
	getByFolder: function(func, id) {
		jsonrpc.fileService.getByFolder(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, id);
	},

	deleteFiles: function(func, ids) {
		jsonrpc.fileService.deleteFiles(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, ids);
	},
	
	updateContent: function(func, id, content) {
		jsonrpc.fileService.updateContent(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, id, content);
	},
	
	getFile: function(func, id) {
		jsonrpc.fileService.getFile(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, id);
	},
	
	saveFile: function(func, vo) {
		jsonrpc.fileService.saveFile(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, vo);
	},
};

var configService = {
		
	getConfig: function(func) {
		jsonrpc.configService.getConfig(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		});
	},

	saveConfig: function(func, vo) {
		jsonrpc.configService.saveConfig(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, vo);
	},

	restoreCommentsTemplate: function(func) {
		jsonrpc.configService.restoreCommentsTemplate(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		});
	},
	
};

var formService = {
		
	getForm: function(func, id) {
		jsonrpc.formService.getForm(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, id);
	},

	saveForm: function(func, vo) {
		jsonrpc.formService.saveForm(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, vo);
	},

	select: function(func) {
		jsonrpc.formService.select(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		});
	},
		
	deleteForm: function(func, ids) {
		jsonrpc.formService.deleteForm(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, ids);
	},
	
	getFormConfig: function(func) {
		jsonrpc.formService.getFormConfig(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		});
	},

	saveFormConfig: function(func, vo) {
		jsonrpc.formService.saveFormConfig(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, vo);
	},
	
	restoreFormTemplate: function(func) {
		jsonrpc.formService.restoreFormTemplate(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		});
	},
	
	restoreFormLetter: function(func) {
		jsonrpc.formService.restoreFormLetter(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		});
	},
	
};

var fieldService = {
		
	updateField: function(func, vo) {
		jsonrpc.fieldService.updateField(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, vo);
	},

	getByForm: function(func, id) {
		jsonrpc.fieldService.getByForm(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, id);
	},
	
	getById: function(func, id) {
		jsonrpc.fieldService.getById(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, id);
	},

	remove: function(func, ids) {
		jsonrpc.fieldService.remove(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, ids);
	},
};

var seoUrlService = {
		
	save: function(func, vo) {
		jsonrpc.seoUrlService.save(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, vo);
	},

	select: function(func) {
		jsonrpc.seoUrlService.select(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		});
	},
		
	getById: function(func, id) {
		jsonrpc.seoUrlService.getById(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, id);
	},

	remove: function(func, ids) {
		jsonrpc.seoUrlService.remove(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, ids);
	},
};

var userService = {
		
	save: function(func, vo) {
		jsonrpc.userService.save(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, vo);
	},

	select: function(func) {
		jsonrpc.userService.select(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		});
	},
			
	getById: function(func, id) {
		jsonrpc.userService.getById(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, id);
	},

	getLoggedIn: function(func) {
		jsonrpc.userService.getLoggedIn(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		});
	},

	remove: function(func, ids) {
		jsonrpc.userService.remove(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, ids);
	},
};

var languageService = {
		
	save: function(func, vo) {
		jsonrpc.languageService.save(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, vo);
	},

	select: function(func) {
		jsonrpc.languageService.select(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		});
	},
				
	getById: function(func, id) {
		jsonrpc.languageService.getById(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, id);
	},

	remove: function(func, ids) {
		jsonrpc.languageService.remove(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, ids);
	},
};

var messageService = {
		
	save: function(func, vo) {
		jsonrpc.messageService.save(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, vo);
	},

	select: function(func) {
		jsonrpc.messageService.select(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		});
	},
					
	getById: function(func, id) {
		jsonrpc.messageService.getById(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, id);
	},

	remove: function(func, codes) {
		jsonrpc.messageService.remove(function (r,e) {
		if (backServiceFailed(e)) return;
			func(r);
		}, codes);
	},
	
	selectByCode: function(func, code) {
		jsonrpc.messageService.selectByCode(function (r,e) {
			if (backServiceFailed(e)) return;
			func(r);
		}, code);
	},
	
};